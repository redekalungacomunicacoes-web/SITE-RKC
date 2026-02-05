import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";
import { createProjeto, getProjeto, slugify, updateProjeto } from "@/lib/cms";

type ProjetoFormData = {
  title: string;
  shortDescription: string;
  description: string;
  status: "Em andamento" | "Planejamento" | "Concluído";
  beneficiaries: string;
  location: string;
  startDate: string;
  endDate?: string;
  coverImage: string;
};

export function AdminProjetoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProjetoFormData>({
    defaultValues: {
      title: "",
      shortDescription: "",
      description: "",
      status: "Planejamento",
      beneficiaries: "",
      location: "",
      startDate: "",
      endDate: "",
      coverImage: "",
    }
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    (async () => {
      setLoading(true);
      const { data, error } = await getProjeto(id);
      setLoading(false);

      if (error || !data) {
        alert(error?.message || "Não foi possível carregar o projeto.");
        return;
      }

      const p: any = data;
      const meta = (p.meta || {}) as any;

      reset({
        title: p.titulo || "",
        shortDescription: p.resumo || "",
        description: p.descricao || "",
        status: p.publicado_transparencia ? "Em andamento" : "Planejamento",
        beneficiaries: meta.beneficiaries || "",
        location: meta.location || "",
        startDate: meta.startDate || "",
        endDate: meta.endDate || "",
        coverImage: p.capa_url || "",
      });
    })();
  }, [id, reset]);

  const onSubmit = async (data: ProjetoFormData) => {
    setLoading(true);

    const publicado_transparencia = data.status !== "Planejamento";

    const payload: any = {
      titulo: data.title,
      slug: slugify(data.title),
      resumo: data.shortDescription || null,
      descricao: data.description || null,
      capa_url: data.coverImage || null,
      publicado_transparencia,
      published_at: publicado_transparencia ? new Date().toISOString() : null,
      // Requer coluna meta (jsonb). Se ainda não existir, rode o SQL enviado na mensagem.
      meta: {
        beneficiaries: data.beneficiaries || "",
        location: data.location || "",
        startDate: data.startDate || "",
        endDate: data.endDate || "",
        status: data.status,
      },
    };

    const res = isEditing && id
      ? await updateProjeto(id, payload)
      : await createProjeto(payload);

    setLoading(false);

    if (res.error) {
      alert(res.error.message);
      return;
    }

    navigate("/admin/projetos");
  };


return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/admin/projetos" className="p-2 hover:bg-muted rounded-full transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isEditing ? "Editar Projeto" : "Novo Projeto"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isEditing ? "Atualize os detalhes do projeto social." : "Cadastre uma nova iniciativa."}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => navigate("/admin/projetos")}
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
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Dados do Projeto</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome do Projeto</label>
              <input
                {...register("title", { required: "Nome é obrigatório" })}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Ex: Horta Comunitária"
              />
              {errors.title && <span className="text-destructive text-xs">{errors.title.message}</span>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Breve Descrição (Resumo)</label>
              <textarea
                {...register("shortDescription", { required: "Breve descrição é obrigatória" })}
                className="w-full h-24 p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Resumo curto para aparecer nos cards..."
              />
              {errors.shortDescription && <span className="text-destructive text-xs">{errors.shortDescription.message}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Público Alvo / Beneficiários</label>
                <input
                  {...register("beneficiaries")}
                  className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Ex: 150 famílias"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Localização</label>
                <input
                  {...register("location")}
                  className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="Ex: Comunidade Vão de Almas"
                />
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Detalhamento</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Descrição Completa</label>
              <textarea
                {...register("description", { required: "Descrição completa é obrigatória" })}
                className="w-full min-h-[300px] p-4 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-mono text-sm"
                placeholder="Descreva objetivos, metodologia e resultados esperados..."
              />
              {errors.description && <span className="text-destructive text-xs">{errors.description.message}</span>}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Status e Prazos</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Status Atual</label>
              <select
                {...register("status")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              >
                <option value="Planejamento">Planejamento</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
                <option value="Pausado">Pausado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Data de Início</label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Previsão de Término</label>
              <input
                type="date"
                {...register("endDate")}
                className="w-full h-10 px-3 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="font-semibold text-lg border-b pb-4 mb-4">Galeria</h3>
             <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer bg-muted/10">
              <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Capa do Projeto</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">URL da imagem de capa</label>
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
