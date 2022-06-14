class CoinsBar extends StatusBar{
    
        IMAGES_COINS = [
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/40_.png',
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/60_.png',
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/80_ _1.png',
            './img/7.Marcadores/Barra/Marcador moneda/Naranja/100__1.png'
            
        ];

        constructor(){
            super().loadImg('./img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png');
            this.loadImages(this.IMAGES_COINS);
            this.y = 110;
            
            
        }
}