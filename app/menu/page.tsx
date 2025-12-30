import { supabase } from "@/lib/supabaseClient";

export default async function MenuPage() {
  const { data: categories, error: catError } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (catError) return <pre>Error categorías: {catError.message}</pre>;

  const { data: products, error: prodError } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (prodError) return <pre>Error productos: {prodError.message}</pre>;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>Menú</h1>

      {categories?.map((cat) => (
        <section key={cat.id} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 20, marginBottom: 8 }}>{cat.name}</h2>

          <div style={{ display: "grid", gap: 10 }}>
            {products
              ?.filter((p) => p.category_id === cat.id)
              .map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: 10,
                    padding: 12,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <strong>{p.name}</strong>
                    <span>${p.base_price}</span>
                  </div>

                  {p.description ? (
                    <div style={{ marginTop: 6, color: "#444" }}>{p.description}</div>
                  ) : null}
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
