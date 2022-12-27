import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
  TextField,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, teal } from "@mui/material/colors";
import KeysInputTable from "../widgets/KeysInputTable";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import RemoveIcon from "@mui/icons-material/Remove";
import KeysTable from "../widgets/KeysTable";
import CheckIcon from "@mui/icons-material/Check";
import { insertKeys } from "../api/insertData";
import { getKeys } from "../api/fetchData";
import { showLoading } from "../RecoilStates";
import { useRecoilState, useSetRecoilState } from "recoil";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});
const checktheme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
  },
});
function AddBtn({ setShowAdd, showAdd }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        size="small"
        sx={{ padding: 1, minWidth: 0, borderRadius: 3 }}
        onClick={() => {
          setShowAdd(!showAdd);
        }}
      >
        {showAdd ? <RemoveIcon /> : <AddOutlinedIcon />}
      </Button>
    </ThemeProvider>
  );
}

function ConfirmBtn({ onAdd }) {
  return (
    <ThemeProvider theme={checktheme}>
      <Button
        variant="contained"
        size="small"
        sx={{ padding: 1, minWidth: 0, borderRadius: 3 }}
        onClick={() => {
          onAdd();
        }}
      >
        <CheckIcon />
      </Button>
    </ThemeProvider>
  );
}

export default function KeysList() {
  const [showAdd, setShowAdd] = useState(false);
  const [newKeyObj, setNewKeyObj] = useState({
    desc: "",
    id: "",
    password: "",
  });
  const [keys, setKeys] = useState([]);
  const setShowLoading = useSetRecoilState(showLoading);
  const [verified, setVerified] = useState(false);
  const [vcode, setVcode] = useState('')

  const getKey = async () => {
    await getKeys().then((keys) => {
      setKeys(keys);
      setShowLoading(false);
    });
  };

  useEffect(() => {
    vcode === 'ogogog' &&
      setVerified(true)
  },[vcode])

  useEffect(() => {
    verified &&
    getKey();
  }, [verified]);

  const transition = {
    type: "spring",
    duration: 0.8,
  };

  const onAdd = async () => {
    setShowLoading(true);
    await insertKeys(newKeyObj).then((rs) => {
      if (rs) {
        setNewKeyObj({ desc: "", id: "", password: "" });
        setShowAdd(false);
        getKey();
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      {verified ? (
        <Scrollbars>
          <Box sx={{ mt: 10, ml: 4, mr: 4, mb: 10 }}>
            <Box
              sx={{
                fontSize: "2rem",
                mb: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box flex={1}>Keys</Box>
              {showAdd && (
                <motion.div
                  style={{ marginRight: 10 }}
                  layout
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <ConfirmBtn onAdd={onAdd} />
                </motion.div>
              )}
              <Box>
                <AddBtn setShowAdd={setShowAdd} showAdd={showAdd} />
              </Box>
            </Box>

            <LayoutGroup>
              {showAdd && (
                <motion.div
                  layoutId="inputtable"
                  layout
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -300 }}
                  transition={transition}
                >
                  <KeysInputTable
                    setNewKeyObj={setNewKeyObj}
                    newKeyObj={newKeyObj}
                  />
                </motion.div>
              )}

              <motion.div layout layoutId="list" style={{ marginTop: "5%" }}>
                <KeysTable keys={keys} />
              </motion.div>
            </LayoutGroup>
          </Box>
        </Scrollbars>
      ) : (
        <Box sx={{width: '100%', textAlign:'center', mt: 10}} >
          <TextField value={vcode} onChange={e => {setVcode(e.target.value)}} type="password"></TextField>
        </Box>
      )}
    </ThemeProvider>
  );
}
