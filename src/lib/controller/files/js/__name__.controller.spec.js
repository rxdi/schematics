import 'jest';
import { map } from 'rxjs/operators';
import { Container, sendRequest, createTestBed, HapiModule, GraphQLModule, HAPI_SERVER } from '@gapi/core';
import { Server } from 'hapi';
import { from } from 'rxjs';
import { <%= classify(name) %>Controller } from './<%= name %>.controller';

describe('<%= classify(name) %> Controller', () => {
  let server: Server;
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      controllers: [<%= classify(name) %>Controller]
    }, [
        HapiModule.forRoot(),
        GraphQLModule.forRoot(null)
      ])
      .toPromise();
      server = Container.get<Server>(HAPI_SERVER);
  });

  afterAll(async () => await Container.get<Server>(HAPI_SERVER).stop());

  it('e2e: queries => (initQuery) : Should sucessfully ....', async done => {
    from(sendRequest<any>({
      query: `
        query initQuery {
          initQuery {
            init
          }
        }
    `,
      variables: {},
      signiture: {
        token: ''
      }
    })).pipe(
      map(res => {
        expect(res.success).toBeTruthy();
        return res.data.initQuery;
      }),
    )
      .subscribe(async res => {
        expect(res.init).toBeTruthy()
        done();
      }, err => {
        console.error(err);
        expect(err).toBe(null);
        done();
      });
  });
});
