import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🌐 Públicas
import LandingView from "./views/public/Landing/LandingView";
import TerminosYCondiciones from "./views/public/Terminos y politicas/TerminosView";
import Politicasprivacidad from "./views/public/Terminos y politicas/PoliticaPrivacidadView";
import Layout from "./views/public/Layout";
import EdnpointNoEncontradoView from "./views/public/Endpoint no encontrado/EdnpointNoEncontradoView";
import PaginaNoAutorizadaView from "./views/public/Pagina no Autorizada/PaginaNoAutorizadaView";

// 🔐 Auth (ahora serán privadas)
import LoginView from "./views/public/Login/LoginView";
import RegisterView from "./views/public/Register/RegisterView";
import RecuperarContraseñaView from "./views/public/RecuperarContraseña/RecuperarContraseñaView";
import NuevaContraseñaView from "./views/public/Nueva Contraseña/NuevaContraseñaView";

// 🔐 Rutas protegidas
import PrivateRoute from "./routes/PrivateRoute";
import LayoutCierre from "./views/private/LayoutCierre";

// 👨‍💼 ADMIN
import DashboardAdminView from "./views/private/Dashboard-ADMIN/DashboardAdminView";
import Trabajos from "./views/private/Dashboard-ADMIN/ui/Trabajos";
import Usuarios from "./views/private/Dashboard-ADMIN/ui/Usuarios";
import SolicitudesTrabajo from "./views/private/Dashboard-ADMIN/ui/SolicitudesTrabajo";
import SolicitudesRegistro from "./views/private/Dashboard-ADMIN/ui/SolicitudesRegistro";
import RegistrarTrabajo from "./views/private/Dashboard-ADMIN/ui/RegistrarTrabajo";
import Perfil from "./views/private/Dashboard-ADMIN/ui/Perfil";

// 👨‍🔧 PERSONAL
import DashboardPersonalView from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/DashboardPersonalView";
import TrabajosPersonal from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/ui/TrabajosPersonal";
import EstadoPago from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/ui/EstadoPago";
import ReportesPersonal from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/ui/ReportesPersonal";
import PerfilPersonal from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/ui/PerfilPersonal";
import UsuariosPersonal from "./views/private/Dashboard-PERSONAL_CENTRO_DE_SERVICIOS/ui/UsuariosPersonal";

// 👤 USER
import DashboardUserView from "./views/private/Dashboard-USER/DashboardUserView";
import PerfilUser from "./views/private/Dashboard-USER/ui/PerfilUser";
import TrabajosUser from "./views/private/Dashboard-USER/ui/TrabajosUser";
import ComprobantesUser from "./views/private/Dashboard-USER/ui/ComprobantesUser.jsx";
import SolicitarTrabajoUser from "./views/private/Dashboard-USER/ui/SolicitarTrabajoUser";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 RUTAS PÚBLICAS */}
        <Route element={<Layout />}>
          <Route index element={<LandingView />} />
          <Route path="/terminos" element={<TerminosYCondiciones />} />
          <Route path="/privacidad" element={<Politicasprivacidad />} />
        </Route>

        {/* 🔐 RUTAS PROTEGIDAS GENERALES */}
        <Route element={<PrivateRoute />}>
          <Route element={<LayoutCierre />}>

            {/* 🔒 AUTH (AHORA PRIVADAS) */}
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/reset-password" element={<RecuperarContraseñaView />} />
            <Route path="/new-password" element={<NuevaContraseñaView />} />

            {/* 👨‍💼 ADMIN */}
            <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
              <Route path="/admin/" element={<DashboardAdminView />} />
              <Route path="/admin/trabajos" element={<Trabajos />} />
              <Route path="/admin/usuarios" element={<Usuarios />} />
              <Route path="/admin/solicitudes-trabajo" element={<SolicitudesTrabajo />} />
              <Route path="/admin/solicitudes-registro" element={<SolicitudesRegistro />} />
              <Route path="/admin/registrar-trabajo" element={<RegistrarTrabajo />} />
              <Route path="/admin/perfil" element={<Perfil />} />
            </Route>

            {/* 👨‍🔧 PERSONAL */}
            <Route element={<PrivateRoute allowedRoles={["PERSONAL_CENTRO_DE_SERVICIOS"]} />}>
              <Route path="/personal/" element={<DashboardPersonalView />} />
              <Route path="/personal/trabajos" element={<TrabajosPersonal />} />
              <Route path="/personal/estado-pago" element={<EstadoPago />} />
              <Route path="/personal/usuarios" element={<UsuariosPersonal />} />
              <Route path="/personal/reportes" element={<ReportesPersonal />} />
              <Route path="/personal/perfil" element={<PerfilPersonal />} />
            </Route>

            {/* 👤 USER */}
            <Route element={<PrivateRoute allowedRoles={["USER"]} />}>
              <Route path="/user/" element={<DashboardUserView />} />
              <Route path="/user/perfil" element={<PerfilUser />} />
              <Route path="/user/trabajos" element={<TrabajosUser />} />
              <Route path="/user/comprobantes" element={<ComprobantesUser />} />
              <Route path="/user/solicitar-trabajo" element={<SolicitarTrabajoUser />} />
            </Route>

          </Route>
        </Route>

        {/* 🚫 ERRORES */}
        <Route path="/unauthorized" element={<PaginaNoAutorizadaView />} />
        <Route path="*" element={<EdnpointNoEncontradoView />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;