import AlyaNum from "./AlyaNum"

const MOVEMENT_KEY_SET = {
    "FWD": 'W',
    "LFT": 'A',
    "RHT": 'S',
    "BKWD": 'D',
}

function keyListen(key_name: string, fn: () => void) {
    let listener = addEventListener('keydown', (ev: KeyboardEvent) => {
        if (ev.key === key_name) {
            fn()
        }
    })


}

keyListen(MOVEMENT_KEY_SET.FWD, function(){
    
})

type pairs = Record<string, any>

function T(object: any) { // quick-util function
    return typeof(object)
}

async function xpcall<T>(
  fn: () => Promise<T>,
  errorHandler: (error: unknown) => unknown | Promise<unknown>
): Promise<[true, T] | [false, unknown]> {
  try {
    const result = await fn();
    return [true, result];
  } catch (error) {
    const handledError = await errorHandler(error);
    return [false, handledError];
  }
}


async function getraw(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`http err | stat: ${response.status}`);
  }
  return await response.text();
}