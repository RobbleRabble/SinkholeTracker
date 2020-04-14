using Microsoft.EntityFrameworkCore.Migrations;

namespace SinkholeTracker.Migrations
{
    public partial class gpsaddedpoco : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullAddress",
                table: "Sinkholes",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Latitude",
                table: "Sinkholes",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Longitude",
                table: "Sinkholes",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullAddress",
                table: "Sinkholes");

            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Sinkholes");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Sinkholes");
        }
    }
}
