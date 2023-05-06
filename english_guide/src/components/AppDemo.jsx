import React from 'react'

const AppDemo = () => {
    return (
        <div className='flex items-center content-center'>
            <div className="bg-contain bg-center bg-no-repeat w-[355px] h-[710px] shrink-0 relative bg-movil">
                <iframe frameborder="0"
                    style={{
                        position: "absolute",
                        width: "88%",
                        left: "6%",
                        height: "87%",
                        top: "7%",
                        borderRadius: "20px 20px 30px 30px",
                        zIndex: "1",
                    }}
                    data-src="https://www.securitasdirect.es/lp/app_verisure/videovigilancia.php" src="https://www.securitasdirect.es/lp/app_verisure/videovigilancia.php" data-loaded="true">
                </iframe>
            </div>
        </div >
    )
}

export default AppDemo
