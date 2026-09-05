import { vi } from 'vitest'
import { executeFalVideoGeneration } from '@/lib/ai-providers/fal/video'
import { startScenarioServer } from '../../helpers/fakes/scenario-server'

export const FAL_PROVIDER_CONFIG = {
  id: 'fal',
  name: 'fal',
  apiKey: 'fal-key',
} as const

export { afterEach, beforeEach, describe, expect, it } from 'vitest'
export { executeFalVideoGeneration, startScenarioServer, vi }
