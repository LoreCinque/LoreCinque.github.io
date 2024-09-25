import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/all.min.css";
import "../../public/css/sharp-solid.min.css";
import "../../public/css/fontawesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import { Providers } from "@/redux/provider";
import CustomCursor from "@/components/utils/CustomCursor";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CustomCursor />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
