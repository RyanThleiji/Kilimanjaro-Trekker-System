export function notImplemented(req, res) {
  res.status(501).json({
    message: 'TODO: This endpoint is scaffolded but not implemented yet.',
  });
}
