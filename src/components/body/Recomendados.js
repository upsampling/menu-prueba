import React from 'react';


export const Recomendados = () => {
    return (
<>
         <div className="container_carne" id="recomendados">

                <div className="container_image">
                    <div className="container_background_recomendados">
                        <div className="marco">
                            <div className="title">
                                <h1><span>RECOMENDADOS</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col_container">
                    <div className="item0">
                        <div className="item0_price">
                            <div>churrasco de la casa</div>
                            <div>$180.00</div>      
                        </div>
                        <div className="item0_desc">Lorem ipsum dolor sit amet, consecteur. Lorem ipsum dolor sit amet.</div>
                    </div>
                    
                    <div className="item1">
                        <div className="item1_price">
                        <div>lasagna</div>
                        <div>$110.00</div>      
                        </div>
                        <div className="item1_desc">Lorem ipsum dolor sit amet, consecteur. Lorem ipsum dolor sit amet.</div>
                    </div>

                    <div className="item0">
                        <div className="item0_price">
                        <div>carne con papas</div>
                        <div>$60.00</div>      
                        </div>
                        <div className="item0_desc">Lorem ipsum dolor sit amet, consecteur. Lorem ipsum dolor sit amet.</div>
                    </div>                                                                    
                </div>
            </div>
        </>
    )
}
