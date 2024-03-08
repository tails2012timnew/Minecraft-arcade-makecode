namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
}
function play_music () {
    Notification.notify("Now Playing: Wet Hands", 5, assets.image`minecraft logo`)
    music.play(music.stringPlayable(music.convertRTTTLToMelody("Wet Hands:d=4,o=5,b=74:8a3,8c#4,8a4,8b4,8c#,8b4,8a4,8e4,8d4,8f#4,8c#,8e,8c#,a.4,8a3,8c#4,8a4,8b4,8c#,8b4,8a4,8e4,8d4,8f#4,8c#,8e,8c#,a.4,8g#,8c#4,8a4,8b4,8c#,8b4,8a,8e4,8f#,8f#4,8c#,8e,8c#,8a4,8e,8f#,8g#,8c#4,8a4,8b4,8c#,8b4,8b,8c#6,8d4,8f#,8c#,8e,8c#,8a4,8c#6,8e6,8g6,8b3,8d4,8f#6,8d6,8f#4,8a,8b,8g3,8b3,8d4,8f#4,2a4,8g6,8b3,8f#6,8f#4,8d6,8f#4,8a,8b,8g3,8b3,8d4,8f#4,a4,a,8e,8c#4,8a4,8b4,8c#,8b4,8a4,8e4,8a3,8c#4,8e4,8a4,8c#,8e,8a,2c#6,8p,32b,16d.6,8d4,8f#4,8c#6,a,8e6,8f#6,8b3,8d6,8f#4,8a4,c#,8b,8c#6,8d6,8b3,8c#6,8d6,8a4,f#.6,c#6,2a4,8b4,8a4,8b4,8g#3,8b3,8e4,8g#4,8e4,8b3,8g#3,8e3,8g#3,8b3,8e4,8g#4,8e4,a3,8g6,8f#6,8e6,8d6,8e6,8d6,8e6,8f#6,8a3,8e6,8e4,8a4,8a6,8b4,8a4,8e4,8g#6,8e6,8b,8g#,2e,8b,8g#,8e,8b4,2g#4,8e3,8g#3,8b3,8e4,2e4,8e3,8g#3,8b3,8e4,1b.3"), 151), music.PlaybackMode.UntilDone)
    Notification.notify("Now Playing: Sweden", 5, assets.image`minecraft logo`)
    music.play(music.stringPlayable(music.convertRTTTLToMelody("sweden:d=4,o=5,b=43:g4,f#3,d,b3,a4,g3,2e,b4,f#3,f#,b3,c#,g3,2e,b4,f#3,f#,b3,c#,g3,2e,b4,8a,8b,f#,8b3,16d,16e,c#,8g3,16f#,16a,2e,8b4,8d6,8b,8a,f#,8b3,16d,16e,c#,8g3,16a,16f#,2e,b4,8a,8b,d6,8b3,16f#6,16e6,c#6,8g3,16d6,16c#6,2a,b4,8b,8a,f#,8b3,16d,16e,c#,8g3,16f#,16a,2e,b4,8a,8b,f#,8b3,16d,16e,c#,8g3,16f#,16a,2e,b4,8a,8b,d6,8b3,16d6,16e6,c#6,8f#6,16f#,16a,2e,f#.,16b,16a,g#,8e,8d,c#,8d,8e,2b4,d.6,16b,16a,g#,8e,8e6,c#6,8d6,16e6,16e,1b."), 120), music.PlaybackMode.UntilDone)
    play_music()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    locationplayer2 = mySprite2.tilemapLocation()
    tiles.setTileAt(tiles.getTileLocation(locationplayer2.column - 1, locationplayer2.row), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(locationplayer2.column - 1, locationplayer2.row), false)
})
statusbars.onZero(StatusBarKind.health2, function (status) {
    sprites.destroy(mySprite2, effects.hearts, 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (block == parseFloat("1")) {
        location = mySprite2.tilemapLocation()
        tiles.setTileAt(mySprite2.tilemapLocation(), sprites.builtin.brick)
        tiles.setWallAt(mySprite2.tilemapLocation(), true)
    } else {
        location = mySprite2.tilemapLocation()
        tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`grass`)
        tiles.setWallAt(mySprite2.tilemapLocation(), true)
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mySprite, effects.hearts, 500)
})
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    splitScreen.setSplitScreenEnabled(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.player2.isPressed(ControllerButton.B)) {
        statusbar.value += -1
        mySprite.x += -5
    } else if (controller.player1.isPressed(ControllerButton.B)) {
        statusbar2.value += -1
        mySprite2.x += -5
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (block == parseFloat("0")) {
        Notification.notify("Now Holding brick", 5)
        block = 1
        Notification.waitForNotificationFinish()
    } else if (block == parseFloat("1")) {
        Notification.notify("Now Holding grass", 5)
        block = 0
        Notification.waitForNotificationFinish()
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (block == parseFloat("1")) {
        location = mySprite.tilemapLocation()
        tiles.setTileAt(mySprite.tilemapLocation(), sprites.builtin.brick)
        tiles.setWallAt(mySprite.tilemapLocation(), true)
    } else {
        location = mySprite.tilemapLocation()
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`grass`)
        tiles.setWallAt(mySprite.tilemapLocation(), true)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.HorizontalTopHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.HorizontalBottomHalf)
    splitScreen.setSplitScreenEnabled(true)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mySprite2)
    statusbar2 = statusbars.create(20, 4, StatusBarKind.health2)
    statusbar2.attachToSprite(mySprite2)
    statusbar2.setLabel("HP")
    statusbar2.max = 12
    statusbar2.value = 12
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    mySprite2.setStayInScreen(true)
    Notification.notify("Loaded Split Screen")
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    location = mySprite.tilemapLocation()
    tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row), assets.tile`transparency16`)
    tiles.setWallAt(tiles.getTileLocation(location.column - 1, location.row), false)
})
let statusbar2: StatusBarSprite = null
let location: tiles.Location = null
let mySprite2: Sprite = null
let locationplayer2: tiles.Location = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let block = 0
block = 0
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite.setStayInScreen(true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 2))
controller.player1.moveSprite(mySprite)
splitScreen.setSplitScreenEnabled(false)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mySprite)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.setLabel("HP")
statusbar.max = 12
statusbar.value = 12
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
play_music()
forever(function () {
    timer.after(randint(10000, 1000000000), function () {
        statusbar.value += 1
        statusbar2.value += 1
    })
})
