import cabifyLogo from "../assets/Cabify.png";
import coderhouseLogo from "../assets/Coderhouse.png";
import despegarLogo from "../assets/Despegar.png";
import efeLogo from "../assets/efe.jpg";
import greenglassLogo from "../assets/Greenglass.jpg";
import samsungLogo from "../assets/Samsung.svg";
import cabify from "../assets/cabify-img.png";
import coderhouse from "../assets/coderhouse-img.png";
import despegar from "../assets/despegar-img.png";
import efe from "../assets/efe-img.png";
import greenglass from "../assets/greenglas-img.png";
import samsung from "../assets/samsung-img.png";

import {
  FaCar,
  FaLaptop,
  FaPlane,
  FaTrain,
  FaGlassWhiskey,
  FaTv,
} from "react-icons/fa";

export const benefits = [
  {
    logo: cabifyLogo,
    icon: <FaCar size={28} className="text-primary-400" />,
    title: "50% de descuento en hasta 5 viajes",
    description: "Máximo $2000 por viaje para todos los usuarios",
    image: cabify,
  },
  {
    logo: coderhouseLogo,
    icon: <FaLaptop size={28} className="text-primary-400" />,
    title: "Todos los días de Julio 20% dcto adicional",
    description:
      "20% de descuento adicional sobre Plan CoderBeca en todos los cursos y carreras a tráves de la página",
    image: coderhouse,
  },
  {
    logo: despegarLogo,
    icon: <FaPlane size={28} className="text-primary-400" />,
    title: "50% dcto en Transporte al Aeropuerto Arturo Merino Benítez",
    description: "Pagando con tu tarjeta Tenpo Black",
    image: despegar,
  },
  {
    logo: efeLogo,
    icon: <FaTrain size={28} className="text-primary-400" />,
    title: "Obtén 50% de cashback",
    description:
      "50% de cashback hasta el 26 de Julio en servicio tren Limache-Puerto, trolebuses, buses eléctricos",
    image: efe,
  },
  {
    logo: greenglassLogo,
    icon: <FaGlassWhiskey size={28} className="text-primary-400" />,
    title: "15% dscto en  tienda online www.greenglas.cl",
    description: "Usando como cupón los 6 primeros dígitos de tu tarjeta Tenpo",
    image: greenglass,
  },
  {
    logo: samsungLogo,
    icon: <FaTv size={28} className="text-primary-400" />,
    title: "$30.000 de devolución en samsung.com",
    description:
      "Pagando con tu  tarjeta de crédito y tarjeta de crédito con ahorro ",
    image: samsung,

  },
];
