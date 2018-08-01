const specializations = {}

specializations[CLASSES.PRIEST] = {
    DISCIPLINE: ROLES.HEALER,
    HOLY: ROLES.HEALER,
    SHADOW: ROLES.RANGED
}

specializations[CLASSES.DEATH_KNIGHT] = {
    BLOOD: ROLES.TANK,
    FROST: ROLES.MELEE,
    UNHOLY: ROLES.MELEE
}

specializations[CLASSES.DRUID] = {
    BALANCE: ROLES.RANGED,
    FERAL: ROLES.MELEE,
    GUARDIAN: ROLES.TANK,
    RESTORATION: ROLES.HEALER
}

specializations[CLASSES.SHAMAN] = {
    ELEMENTAL: ROLES.RANGED,
    ENHANCEMENT: ROLES.MELEE,
    RESTORATION: ROLES.HEALER
}

specializations[CLASSES.MONK] = {
    WINDWALKER: ROLES.MELEE,
    BREWMASTER: ROLES.TANK,
    MISTWEAVER: ROLES.HEALER
}

specializations[CLASSES.HUNTER] = {
    SURVIVAL: ROLES.MELEE,
    BEAST_MASTERY: ROLES.RANGED,
    MARKMANSHIP: ROLES.RANGED
}

specializations[CLASSES.MAGE] = {
    FIRE: ROLES.RANGED,
    FROST: ROLES.RANGED,
    ARCANE: ROLES.RANGED
}

specializations[CLASSES.PALADIN] = {
    HOLY: ROLES.HEALER,
    PROTECTION: ROLES.TANK,
    RETRIBUTION: ROLES.MELEE
}

specializations[CLASSES.WARLOCK] = {
    AFFLICTION: ROLES.RANGED,
    DEMONOLOGY: ROLES.RANGED,
    DESTRUCTION: ROLES.RANGED
}

specializations[CLASSES.DEMON_HUNTER] = {
    HAVOC: ROLES.MELEE,
    VENGEANCE: ROLES.TANK
}

specializations[CLASSES.ROGUE] = {
    ASSASINATION: ROLES.MELEE,
    OUTLAW: ROLES.MELEE,
    SUBLIETY: ROLES.MELEE
}

specializations[CLASSES.WARRIOR] = {
    FURY: ROLES.MELEE,
    PROTERCTION: ROLES.TANK,
    ARMS: ROLES.MELEE
}

export function getAvailableRoles(classes) {
    return classes.reduce((roles, charClass) => {
        Object.values(specializations[charClass]).forEach((role) => roles.add(role))
        return roles;
    }, new Set())
}

export function getAvailableCharsForRole(role) {
    return Object.keys(specializations).filter((charClass) => {
        return ~Object.values(specializations[charClass]).indexOf(role)
    })
}