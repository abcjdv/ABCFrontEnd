import React, { useEffect } from "react"
import Header from "./components/homecomponents/Header"
import Hero from "./components/homecomponents/Hero"
import About from "./components/homecomponents/About"
import Ourguarantee from "./components/homecomponents/Ourguarantee"
import Faq from "./components/homecomponents/Faq"
import Contact from "./components/homecomponents/Contact"

export default function Home() {
    useEffect(() => {
        const mybutton = document.getElementById("myBtn");


        window.onscroll = function () { scrollFunction() };
        

        const scrollFunction = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }

        }
        const script = document.createElement('script');
            script.src = "./assets/js/main.js";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
    }, [])



    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Ourguarantee />
            <Faq />
            <Contact />
            <button onClick={topFunction} id="myBtn" className="fa fa-arrow-up"></button>
        </main>
    )
}