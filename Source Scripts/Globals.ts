type pairs = Record<string, any>


  var xpcall = async function<T>(fn: () => Promise<T>,
  errorHandler: (error:unknown) => unknown | Promise<unknown>
): Promise<[true, T] | [false, unknown]> {
  try {
    const result = await fn();
    return [true, result];
  } catch (error) {
    const handledError = await errorHandler(error);
    return [false, handledError];
  }
}
var getraw = async function(url: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`err | stat: ${response.status}`);
  }
  return await response.text();
}

var T = function(object: any) { // quick-util function
    return typeof(object)
}