import { log } from 'console';
import os from 'os';
const totalMemory = os.totalmem(); //Returns the total memory in bytes.
const freeMemory = os.freemem(); //Returns the available memory in bytes.
log(totalMemory);
log(freeMemory);
log(os.arch()); //Returns the CPU architecture.
log(os.cpus()); //Returns information about each CPU/core.
log(os.platform()); //Returns the platform of the operating system.
log(os.uptime()); //Returns the system uptime in seconds.
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
