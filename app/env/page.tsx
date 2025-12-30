export default function EnvPage() {
    return (
      <main style={{ padding: 24 }}>
        <h1>Env check</h1>
        <p>URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "OK" : "FALTA"}</p>
        <p>KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "OK" : "FALTA"}</p>
        <p style={{ wordBreak: "break-all" }}>
          URL VALUE: {process.env.NEXT_PUBLIC_SUPABASE_URL || "(vacío)"}
        </p>
      </main>
    );
  }
  