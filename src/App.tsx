import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

function App() {
  const heartImages = [
    { url: "/Nosotros.jpeg", caption: "Nosotros ❤️" },
    { url: "/Bota.jpeg", caption: "El culpable 🤕" },
    { url: "/Loquenosespera.jpeg", caption: "Cenita + Clásico 🍕⚽" }
  ];

  const whatsappUrl = `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent("¡Acepto! ❤️ Voy para allá con la pizza para cuidar a mi lisiado favorito y ver el América vs Chivas. 🍕⚽")}`;

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      p: 3, // Este es el padding externo para que no pegue al borde del cel
      backgroundColor: '#FFF5F7' 
    }}>
      <Container maxWidth="sm" sx={{ p: 0 }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card sx={{ 
            borderRadius: 6, 
            boxShadow: '0 10px 30px rgba(255,182,193,0.3)', 
            overflow: 'hidden' 
          }}>
            <CardContent sx={{ 
              textAlign: 'center', 
              p: { xs: 3, md: 5 } // Padding dinámico: 3 en cel, 5 en PC
            }}>
              <Typography variant="overline" sx={{ color: '#ff8fa3', fontWeight: 'bold' }}>
                🚑 REPORTE MÉDICO DEL CORAZÓN
              </Typography>
              
              <Typography variant="h4" sx={{ 
                fontWeight: 900, 
                mb: 3, 
                color: '#4a4a4a',
                fontSize: { xs: '1.8rem', md: '2.5rem' } // Texto más chico en cel
              }}>
                Inmóvil pero con hambre de verte...
              </Typography>

              {/* Contenedor de fotos ajustable */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, // Vertical en cel, horizontal en PC
                alignItems: 'center',
                justifyContent: 'center', 
                gap: 3, 
                mb: 4 
              }}>
                {heartImages.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      backgroundColor: 'white',
                      padding: '10px 10px 25px 10px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      width: '100%',
                      maxWidth: '200px' // Limita el tamaño para que no se deformen
                    }}
                  >
                    <img src={img.url} style={{ width: '100%', borderRadius: '4px', display: 'block' }} />
                    <Typography sx={{ fontFamily: 'Dancing Script', mt: 1, fontSize: '0.9rem' }}>
                      {img.caption}
                    </Typography>
                  </motion.div>
                ))}
              </Box>

              <Typography variant="body1" sx={{ mb: 4, color: '#666', fontSize: '1.1rem' }}>
                Tobillo: 0 — Nosotros: 1. <br />
                ¿Vienes a ver el Clásico conmigo? 🦅 vs 🐐
              </Typography>

              <Button 
                variant="contained" 
                href={whatsappUrl}
                fullWidth // En celular el botón ocupa todo el ancho, es más fácil de picar
                sx={{ 
                  bgcolor: '#ff8fa3', 
                  borderRadius: 4, 
                  py: 2,
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: '#ff758f' } 
                }}
              >
                ¡Voy para allá! 🍕❤️
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}

export default App;