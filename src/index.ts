import { Container } from './bootstrapper';
import * as cluster from 'cluster';
import * as os from 'os';

const cpus = os.cpus().length;
if(cluster.isMaster) {
    for(let i = 0; i < cpus; i++) {
        cluster.fork({debug: false});
    }
} else {
    const container = new Container();
    container.createApplication().then(app => {
        app.listen(3000, () => {
            console.log('listening on port 3000');
        })
    });
}
