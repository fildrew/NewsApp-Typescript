export interface Article {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
id: string;
title: string;
url: string;
image_url: string;
news_site: string;
summary: string;
published_at: string;
updated_at: string;
featured: boolean;
}

export interface Launch {
    launch_id: string;
    provider: string;
}
