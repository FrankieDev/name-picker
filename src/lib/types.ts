export interface SlotConfigurations {
  /** User configuration for maximum item inside a reel */
  maxReelItems?: number
  /** User configuration for whether winner should be removed from name list */
  removeWinner?: boolean
  /** User configuration for element selector which reel items should append to */
  reelContainerSelector: string
  /** User configuration for callback function that runs before spinning reel */
  onSpinStart?: () => void
  /** User configuration for callback function that runs after spinning reel */
  onSpinEnd?: () => void

  /** User configuration for callback function that runs after user updates the name list */
  onNameListChanged?: () => void
}
