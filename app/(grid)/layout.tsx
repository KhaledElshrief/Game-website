import GridContainer from "../components/defaults/GridContainer";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import NavBar from "../components/nae/NavBar";
import SideBar from "../components/nae/SideBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="background grid h-screen ">
        <GridContainer cols={12}>
            <SideBar/>
            <MaxWidthWrapper className=" lg:col-span-10 col-span-full "><NavBar/>{children}</MaxWidthWrapper>
        </GridContainer>
        
        
    </main>
  );
}
