import { Logo } from "../../atoms/Logo";

const Footer = () => {
  return(
<footer className="bg-white border-t-2 border-gray-200 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex flex-col space-y-6 md:hidden">
      
          <div className="flex justify-center">
            <Logo />
          </div>
          
    
          <nav className="flex justify-center space-x-6" role="navigation" aria-label="Footer links">
            <p >Terms</p>
            <p >Privacy</p>
            <p >Contact</p>
          </nav>
          
    
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Bankrupt Bank. All rights reserved.
            </p>
          </div>
        </div>

      
        <div className="hidden md:flex md:items-center md:justify-between">
  
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
        
          <div className="flex-1 text-center">
            <p className="text-gray-600">
              © 2025 Bankrupt Bank. All rights reserved.
            </p>
          </div>
          

          <nav className="flex-shrink-0" role="navigation" aria-label="Footer links">
            <div className="flex space-x-6">
              <p >Terms</p>
              <p >Privacy</p>
              <p >Contact</p>
            </div>
          </nav>
        </div>

 
        <div className="hidden sm:flex md:hidden items-center justify-between">
          <Logo />
          <div className="flex flex-col items-end space-y-2">
            <nav className="flex space-x-4" role="navigation" aria-label="Footer links">
              <p >Terms</p>
              <p >Privacy</p>
              <p >Contact</p>
            </nav>
            <p className="text-gray-600 text-sm">
              © 2025 Bankrupt Bank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
 
  
}

export default Footer;
