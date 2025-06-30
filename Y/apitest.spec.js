// @ts-check
import { test, expect } from '@playwright/test'
import { request } from '@playwright/test';


test('get', async ({ request }) => {
    const response = await request.get('api/productsList');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log(data);
    expect(data).toHaveProperty('products');
    expect(data.products.length).toBeGreaterThan(0);
});