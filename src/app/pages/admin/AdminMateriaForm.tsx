import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { createMateria, getMateria, slugify, updateMateria } from "@/lib/cms";

type MateriaFormData = {
  title: string;
  subtitle: string;
  author: string;
  category: string;
  date: string;
  content: string;
  coverImage: string;
  status: "published" | "draft" | "archived";
};

export function AdminMateriaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<MateriaFormData>({
    defaultValues: {
      status: "draft",
      date: today,
      title: "",
      subtitle: "",
      author: "",
      category: "",
      content: "",
      coverImage: "",
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    (async () => {
      setLoading(true);
      const { data, error } = await getMateria(id);
      setLoading(false);

      if (error || !data) {
        alert(error?.message || "Não foi possível carregar a matéria.");
        return;
      }

      const d: any = data;
      reset({
        title: d.titulo || "",
        subtitle: d.resumo || "",
        author: d.autor_nome || "",
        category: (d.tags && d.tags[0]) ? d.tags[0] : "",
        date: (d.published_at ? new Date(d.published_at) : new Date(d.created_at)).toISOString().split("T")[0],
        content: d.conteudo || "",
        coverImage: d.capa_url || "",
        status: d.status || "draft",
      });
    })();
  }, [id, reset]);

  const onSubmit = async (data: MateriaFormData) => {
    setLoading(true);

    const tags = data.category ? [data.category] : [];
    const base = {
      titulo: data.title,
      slug: slugify(data.title),
      resumo: data.subtitle || null,
      autor_nome: data.author || null,
      conteudo: data.content || null,
      capa_url: data.coverImage || null,
      tags,
      status: data.status,
      published_at: data.status === "published" ? new Date(data.date).toISOString() : null,
    };

    const res = isEditing && id
      ? await updateMateria(id, base as any)
      : await createMateria({ ...(base as any) });

    setLoading(false);

    if (res.error) {
      alert(res.error.message);
      return;
    }

    navigate("/admin/materias");
  };


return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/materias" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? "Editar Matéria" : "Nova Matéria"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isEditing ? "Atualize os detalhes da publicação." : "Preencha os campos para criar uma nova publicação."}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => navigate("/admin/materias")}
            className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={handleSubmit(onSubmit)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Save className="h-4 w-4" />
            Salvar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Informações Principais</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Título</label>
              <input
                {...register("title", { required: "Título é obrigatório" })}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Digite o título da matéria"
              />
              {errors.title && <span className="text-destructive text-xs">{errors.title.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subtítulo (Linha fina)</label>
              <textarea
                {...register("subtitle")}
                className="w-full h-20 p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Um breve resumo que aparece abaixo do título"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Autor</label>
                <input
                  {...register("author")}
                  className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Nome do autor"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Data de Publicação</label>
                <input
                  type="date"
                  {...register("date")}
                  className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Conteúdo</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Texto da Matéria</label>
              {/* In a real app, integrate a Rich Text Editor here (e.g., TipTap, Quill) */}
              <textarea
                {...register("content", { required: "Conteúdo é obrigatório" })}
                className="w-full min-h-[400px] p-4 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-mono text-sm leading-relaxed"
                placeholder="Escreva o conteúdo da matéria aqui using Markdown ou HTML simples..."
              />
               {errors.content && <span className="text-destructive text-xs">{errors.content.message}</span>}
               <p className="text-xs text-muted-foreground text-right">Suporta Markdown básico.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Publicação</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select
                {...register("status")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="draft">Rascunho</option>
                <option value="published">Publicado</option>
                <option value="archived">Arquivado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Categoria</label>
              <select
                {...register("category")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="Cultura">Cultura</option>
                <option value="Política">Política</option>
                <option value="Educação">Educação</option>
                <option value="Meio Ambiente">Meio Ambiente</option>
                <option value="Projetos">Projetos</option>
                <option value="Agenda">Agenda</option>
              </select>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Imagem de Capa</h3>
            
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer bg-muted/10">
              <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Clique para fazer upload</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG até 5MB</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Ou URL da imagem</label>
              <input
                {...register("coverImage")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
