import 'jest';
import { Container, createTestBed } from '@gapi/core';
import { <%= classify(name) %>Service } from './<%= name %>.service';

describe('<%= classify(name) %> Service', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      services: [<%= classify(name) %>Service]
    }).toPromise();
  });

  it('should be defined', async done => {
    expect(Container.has(<%= classify(name) %>Service)).toBeTruthy();
  });
});
