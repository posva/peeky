import { PeekyConfig, setupConfigLoader } from '@peeky/config'

let initialized = false
export let baseConfig: PeekyConfig

export async function setupWorker () {
  if (initialized) return

  // Base config
  const configLoader = await setupConfigLoader()
  const config = await configLoader.loadConfig(false)
  await configLoader.destroy()
  baseConfig = config

  initialized = true
}
