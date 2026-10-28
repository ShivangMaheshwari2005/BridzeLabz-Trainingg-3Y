// Q5. Boolean Logic Access System
function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Alarm on AND door closed AND window closed AND owner inside
  // (door "closed" is represented here by the door being locked)
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  const anyRisk = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;

  console.log(
    `Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}, ` +
    `Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}  =>  ${secure ? "Secure" : "Unsafe"}` +
    ` (any risk? ${anyRisk})`
  );
}

// Test multiple outcomes
checkSecurity(true,  true,  true,  true);   // Secure
checkSecurity(false, true,  true,  true);   // Unsafe
checkSecurity(true,  false, true,  true);   // Unsafe
checkSecurity(true,  true,  false, true);   // Unsafe
checkSecurity(true,  true,  true,  false);  // Unsafe
