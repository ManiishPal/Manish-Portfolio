import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import {
  Close,
  VolunteerActivism,
  OpenInNew,
  LocalCafe,
} from "@mui/icons-material";

interface DonateDialogProps {
  open: boolean;
  onClose: () => void;
}

const RAZORPAY_PAYMENT_URL =
  "https://razorpay.com/payment-button/pl_TPUU7N9uRMoB8w/view";

function DonateDialog({ open, onClose }: DonateDialogProps) {
  const handlePayClick = () => {
    window.open(RAZORPAY_PAYMENT_URL, "_blank");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: "1.25rem",
            p: { xs: 1.5, sm: 2 },
            background:
              "linear-gradient(135deg, rgba(35, 17, 10, 0.96) 0%, rgba(20, 10, 6, 0.98) 100%)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            color: "#FFF7ED",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack direction="row" alignItems="center" gap={1.2}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              bgcolor: "rgba(255, 110, 145, 0.15)",
              color: "#ff6e91",
              p: 1,
              borderRadius: "0.75rem",
            }}
          >
            <VolunteerActivism />
          </Box>
          <Typography variant="h6" fontWeight={700} sx={{ color: "#FFF7ED" }}>
            Support My Work
          </Typography>
        </Stack>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: "#FFF7ED",
            opacity: 0.7,
            "&:hover": { opacity: 1, bgcolor: "rgba(255, 255, 255, 0.08)" },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 1, mt: 1 }}>
        <Typography
          variant="body2"
          sx={{ color: "rgba(255, 247, 237, 0.8)", mb: 2.5, lineHeight: 1.6 }}
        >
          Thank you for considering supporting my journey! Your contribution helps
          me develop open-source projects, learn new technologies, and maintain
          high-quality applications.
        </Typography>

        <Box sx={{ my: 1, display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handlePayClick}
            startIcon={<LocalCafe sx={{ color: "#ff805f" }} />}
            endIcon={<OpenInNew sx={{ fontSize: "1rem !important" }} />}
            sx={{
              width: "100%",
              py: 1.3,
              px: 2.5,
              borderRadius: "0.85rem",
              background: "linear-gradient(135deg, #072654 0%, #1e40a0 100%)",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0 6px 20px rgba(7, 38, 84, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              transition: "all 0.25s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #0a336f 0%, #2551c7 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 24px rgba(7, 38, 84, 0.6)",
              },
            }}
          >
            Buy Me a Coffee
          </Button>
        </Box>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{ mt: 2 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 247, 237, 0.55)",
              fontSize: "0.78rem",
            }}
          >
            Secured by <strong>Razorpay</strong> • UPI, Cards, Netbanking
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default DonateDialog;
