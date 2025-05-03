import { useContext } from "react";
import { 
  FaUsers, 
} from 'react-icons/fa';
import { ThemeContext } from "../../../providers/ThemeProvider";



const HeroAllProduct = () => {
    const { theme } = useContext(ThemeContext);


    return (
        <header className={`relative overflow-hidden bg-primary-color text-white py-24 px-4`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PC9zdmc+')" }}></div>
            <div className="max-w-6xl mx-auto text-center relative">
                <div className="inline-block p-6 rounded-full bg-white/10 mb-8">
                    <FaUsers className="text-5xl animate-bounce" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Transform Your HR Management
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Streamline your workforce management with our all-in-one cloud solution. Fast deployment, zero maintenance.
                </p>
                <button className={`group flex items-center gap-2 mx-auto px-8 py-4 rounded-xl text-lg font-semibold transition-all 
                ${theme === 'light'
                        ? 'bg-white text-primary-color hover:bg-opacity-95 shadow-lg hover:shadow-xl'
                        : 'bg-[#1f1f1f] text-white hover:bg-[#1f1f1f]'}
              `}>
                    <span>Start Free Trial</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="mt-8 text-sm opacity-80">No credit card required · 14-day free trial</div>
            </div>
        </header>
    )
}

export default HeroAllProduct;