use wasm_bindgen::prelude::*;

#[cfg(feature = "console")]
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn init() {
    #[cfg(feature = "console")]
    log("wasm-rust-suika-game initialized");
}

#[wasm_bindgen]
pub struct GameState {
    score: u32,
}

#[wasm_bindgen]
impl GameState {
    #[wasm_bindgen(constructor)]
    pub fn new() -> GameState {
        GameState { score: 0 }
    }

    pub fn tick(&mut self) {
        self.score += 1;
    }

    pub fn score(&self) -> u32 {
        self.score
    }
}
