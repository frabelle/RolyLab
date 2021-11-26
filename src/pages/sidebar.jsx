import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, Routes, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Grid, Typography} from '@mui/material';
import BiotechIcon from '@mui/icons-material/Biotech';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PostAddIcon from '@mui/icons-material/PostAdd';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import ChurchIcon from '@mui/icons-material/Church';
import LogoutIcon from '@mui/icons-material/Logout';
import RegistrarExamen from '../components/exams/Registrar'

const Sidebar = () =>{
  return(
        <ProSidebar>
        <SidebarHeader>
            
            <Grid container spacing={1} textAlign="center" marginTop="5px">

                <Grid item xs={12} md={12}>
                    <BiotechIcon fontSize="large"/>
                    <Typography variant="h6" component="h6">RolyLab</Typography>
                </Grid>

            </Grid>
            <Menu iconShape="">
                <MenuItem icon={<HomeIcon />}>Página de inicio</MenuItem>
            </Menu>

        </SidebarHeader>
        <SidebarContent>
            <Menu>
                
                <Typography variant="h7" component="h5" marginLeft="30px" marginTop="10px" marginBottom="10px">Gestión de datos</Typography>

                <MenuItem icon={<AssignmentIndIcon />}>Gestión de pacientes</MenuItem>
                <MenuItem icon={<LocalHospitalIcon />}>Gestión de doctores</MenuItem>

                <SubMenu title="Procedencia" icon={<PublicIcon />}>
                    <MenuItem>Nacionalidad</MenuItem>
                    <MenuItem>Departamento</MenuItem>
                    <MenuItem>País</MenuItem>
                </SubMenu>

                <MenuItem icon={<ChurchIcon />}>Religión</MenuItem>
                <MenuItem icon={<FolderSharedIcon />}>Profesiones</MenuItem>
                

                <Typography variant="h7" component="h5" marginLeft="30px" marginTop="20px" marginBottom="10px">Gestión de examen</Typography>
                
                <SubMenu title="Exámenes" icon={<SummarizeIcon />}>
                    <MenuItem>
                        Gestión de examen
                    </MenuItem>
                    <MenuItem>Asignación a perfil</MenuItem>
                    <MenuItem>Valores normales</MenuItem>
                </SubMenu>
                
                <MenuItem icon={<MenuBookIcon />}>Perfiles</MenuItem>
                <MenuItem icon={<PostAddIcon />}>Categorías</MenuItem>

            </Menu>
        </SidebarContent>
        <SidebarFooter>
            <Menu>
                <MenuItem icon={<LogoutIcon />}>Cerrar sesión</MenuItem>
            </Menu>
        </SidebarFooter>
    </ProSidebar>
    
    )
  }

  export default Sidebar;