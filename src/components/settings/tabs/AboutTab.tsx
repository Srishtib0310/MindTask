import { Box, Divider, FormGroup, FormLabel, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import baner from "../../../assets/baner.webp";
import { Inventory2Rounded } from "@mui/icons-material";
import { systemInfo } from "../../../utils";

export default function AboutTab() {
  const [storageUsage, setStorageUsage] = useState<number | undefined>(undefined);

  useEffect(() => {
    const getStorageUsage = async () => {
      const storageUsage = await navigator.storage.estimate();
      setStorageUsage(storageUsage.usage);
    };
    getStorageUsage();
  }, []);

  return (
    <>
      <Typography variant="body1" sx={{ mb: 2 }}>
        A simple todo app project made using React.js and MUI with many features, including
        sharing tasks via link, P2P synchronization using WebRTC, theme customization and offline
        usage as a Progressive Web App (PWA).
      </Typography>
    </>
  );
}
