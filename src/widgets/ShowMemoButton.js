import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { grey, orange, green, cyan, lightBlue, red, pink} from "@mui/material/colors";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Icon, IconButton } from "@mui/material";
import MemoBall from "./MemoBall";

const MemoBallColor = [grey[500], orange[100], green[100], cyan[200], lightBlue[200], red[100], pink[400]]

export default function ShowMemoButton() {
  const [spin, setSpin] = useState(false);
 
  const variants = {
    spin: { rotate: 270 },
    rollback: { rotate: 0 },
  };

  const transition = {
    type: "spring",
    duration: 0.7,
  };

  return (
    <Box>
      <motion.div
        animate={spin ? "spin" : "rollback"}
        initial={false}
        variants={variants}
        transition={transition}
      >
        <IconButton
          size={"small"}
          sx={{
            backgroundColor: grey[800],
            "&:hover": {
              backgroundColor: grey[700],
            },
            zIndex: 20
          }}
          onClick={() => {
            setSpin(!spin);
          }}
        >
          <AddOutlinedIcon sx={{ color: "white" }} />
        </IconButton>
      </motion.div>

      {
        MemoBallColor.map((ball, index) => (
            <MemoBall color={ball} show={spin} index={index}/>
        ))
      }
    </Box>
  );
}
