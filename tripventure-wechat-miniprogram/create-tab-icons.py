from PIL import Image, ImageDraw, ImageFont
import os

# 创建图标目录
os.makedirs('images', exist_ok=True)

# 图标尺寸（微信小程序推荐尺寸）
icon_size = (40, 40)

# 创建首页图标
def create_home_icon():
    # 未选中状态
    img = Image.new('RGBA', icon_size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    # 绘制房子形状
    draw.rectangle([(10, 15), (30, 30)], fill='#999')
    draw.polygon([(10, 15), (20, 5), (30, 15)], fill='#999')
    img.save('images/tab-home.png')
    
    # 选中状态
    img_active = Image.new('RGBA', icon_size, (255, 255, 255, 0))
    draw_active = ImageDraw.Draw(img_active)
    draw_active.rectangle([(10, 15), (30, 30)], fill='#ff6b00')
    draw_active.polygon([(10, 15), (20, 5), (30, 15)], fill='#ff6b00')
    img_active.save('images/tab-home-active.png')

# 创建探索图标
def create_explore_icon():
    # 未选中状态
    img = Image.new('RGBA', icon_size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    # 绘制指南针形状
    draw.circle([(20, 20), 15], fill='#999')
    draw.polygon([(20, 5), (25, 15), (15, 15)], fill='white')
    img.save('images/tab-explore.png')
    
    # 选中状态
    img_active = Image.new('RGBA', icon_size, (255, 255, 255, 0))
    draw_active = ImageDraw.Draw(img_active)
    draw_active.circle([(20, 20), 15], fill='#ff6b00')
    draw_active.polygon([(20, 5), (25, 15), (15, 15)], fill='white')
    img_active.save('images/tab-explore-active.png')

# 修复PIL的circle方法
def draw_circle(draw, bbox, fill):
    x1, y1, x2, y2 = bbox
    draw.ellipse([(x1, y1), (x2, y2)], fill=fill)

# 猴子补丁
ImageDraw.Draw.circle = draw_circle

# 创建图标
create_home_icon()
create_explore_icon()

print('TabBar图标创建完成！')
print('图标路径：')
print('images/tab-home.png')
print('images/tab-home-active.png')
print('images/tab-explore.png')
print('images/tab-explore-active.png')
