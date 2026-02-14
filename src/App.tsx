import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion"; // Para las animaciones pro

function App() {
  const pinkPastel = "#FFF5F7";

  const fotos = [
    { url: "/Nosotros.jpeg", caption: "Foto juntos" },
    { url: "/Bota.jpeg", caption: "Mi tobillo (F)" },
    { url: "/Loquenosespera.jpeg", caption: "Lo que nos espera" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: pinkPastel,
        p: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          borderRadius: 8,
          boxShadow: "0 20px 40px rgba(255, 182, 193, 0.3)",
          overflow: "visible",
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 4 }}>
          <Typography
            variant="overline"
            sx={{ color: "#ff8fa3", fontWeight: "bold", letterSpacing: 2 }}
          >
            🚑 Reporte Médico del Corazón
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: 900, mt: 2, mb: 4, color: "#4a4a4a" }}
          >
            Inmóvil pero con hambre de verte...
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 5,
              perspective: "1000px",
            }}
          >
            {fotos.map((foto, index) => (
              <Box
                key={index}
                component={motion.div}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                sx={{
                  width: 120,
                  height: 150,
                  backgroundColor: "white",
                  p: 1,
                  pb: 3,
                  boxShadow: 3,
                  borderRadius: 1,
                  transform: `rotate(${index % 2 === 0 ? -5 : 5}deg)`,
                  border: "1px solid #eee",
                }}
              >
                <Box
                  component="img"
                  src={foto.url}
                  sx={{
                    width: "100%",
                    height: "80%",
                    objectCover: "cover",
                    mb: 1,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontFamily: "Dancing Script, cursive", color: "#888" }}
                >
                  {foto.caption}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "#666", mb: 4, fontStyle: "italic" }}
          >
            "Tobillo: 0 — Nosotros: 1" <br />
            El plan es perfecto: América vs. Chivas, comida, botana y tú
            cuidando al lisiado (Totito). ❤️
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              component="a"
              href={`https://wa.me/3325731485?text=${encodeURIComponent("Si quiero ir mi totito hermoso peposo y mucho maass")}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#ff8fa3",
                "&:hover": { bgcolor: "#ff758f" },
                borderRadius: 4,
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              ¡Voy para allá! 🍕❤️
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
