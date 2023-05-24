import React from 'react'

const AppDemo = () => {
    return (
        <div className='flex items-start content-center'>
            <div className="bg-contain bg-center bg-no-repeat w-[361px] h-[720px] relative bg-movil max3xl:w-[314px] max3xl:h-[622px]">
                <iframe frameborder="0"
                    style={{
                        position: "absolute",
                        width: "89%",
                        left: "5.825%",
                        height: "90.5%",
                        top: "5%",
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
