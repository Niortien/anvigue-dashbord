import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sales Admin',
};

export default async function Sales() {
    const t = await getTranslations();

    return <div>starter page {t('dashboard')}</div>;
}
