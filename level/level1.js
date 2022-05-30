const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Clouds()
    ],
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*4),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719*4),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719*4),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*4),
    ],
    [
        {
            'bottles': [
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada1.png'),
                new CollectableObject('img/6.botella/2.Botella_enterrada2.png')
            ],

            'coins': [
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png'),
                new CollectableObject('img/8.Coin/Moneda1.png'),
                new CollectableObject('img/8.Coin/Moneda2.png')
            ]
        }
    ]
   
)