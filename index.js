module.exports = function fwfun(mod) {

const path = require('path');
mod.dispatch.addDefinition('C_CAP_PYRE', 1, path.join(__dirname, 'C_CAP_PYRE.1.def'));

let cap_id

	mod.command.add("fw", (arg) => {
		
		if(arg) {
			arg.toLowerCase
			switch (arg) {
				case 'm':
					cap_id = 1
					mod.send('C_CAP_PYRE', 1, {
						id: cap_id
					})
					mod.command.message("Capping mid pyre");				
					break
					return
				case 's':
					cap_id = 2
					mod.send('C_CAP_PYRE', 1, {
						id: cap_id
					})
					mod.command.message("Capping south pyre");				
					break
					return
				case 'n':
					cap_id = 3
					mod.send('C_CAP_PYRE', 1, {
						id: cap_id
					})
					mod.command.message("Capping north pyre");				
					break
					return
				default:
					mod.command.message("Invalid argument. Set a pyre to cap: m(mid, s(south) or n(north).");				
					break
					return					
			}
			
		} else {
			mod.command.message("Set a pyre to cap: m(mid, s(south) or n(north).");
		}
	})
}