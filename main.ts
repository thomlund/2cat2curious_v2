namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paws.vy == 0) {
        hops_and_paws.vy = -200
    }
})
let coin: Sprite = null
let hops_and_paws: Sprite = null
scene.setBackgroundColor(9)
hops_and_paws = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . f f f . . 
    . . . . . . . . . . . f f 5 f f 
    f f f f f f f f f f f f f f f f 
    . . . f . . . . . f . f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops_and_paws, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
hops_and_paws.ay = 350
scene.cameraFollowSprite(hops_and_paws)
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 2 2 2 2 2 5 5 f . . 
        . . f 5 2 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 2 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 2 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 2 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 2 2 5 5 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 4 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 4 4 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 4 4 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 5 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 5 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . f 5 4 5 5 5 f . . . . 
        . . . . . . f 5 4 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 4 4 5 5 f . . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . f 5 4 5 5 5 5 5 f . . . 
        . . . . . f 5 5 4 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 4 4 4 4 5 5 f . . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . f 5 4 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 4 4 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f 5 4 4 4 4 4 4 5 5 f . . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 4 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 4 4 4 4 5 5 5 f . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
