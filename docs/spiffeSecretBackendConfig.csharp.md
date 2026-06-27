# `spiffeSecretBackendConfig` Submodule <a name="`spiffeSecretBackendConfig` Submodule" id="@cdktn/provider-vault.spiffeSecretBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeSecretBackendConfig <a name="SpiffeSecretBackendConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SpiffeSecretBackendConfig(Construct Scope, string Id, SpiffeSecretBackendConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint">ResetBundleRefreshHint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl">ResetJwtIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode">ResetJwtOidcCompatibilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm">ResetJwtSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime">ResetKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBundleRefreshHint` <a name="ResetBundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint"></a>

```csharp
private void ResetBundleRefreshHint()
```

##### `ResetJwtIssuerUrl` <a name="ResetJwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl"></a>

```csharp
private void ResetJwtIssuerUrl()
```

##### `ResetJwtOidcCompatibilityMode` <a name="ResetJwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode"></a>

```csharp
private void ResetJwtOidcCompatibilityMode()
```

##### `ResetJwtSigningAlgorithm` <a name="ResetJwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm"></a>

```csharp
private void ResetJwtSigningAlgorithm()
```

##### `ResetKeyLifetime` <a name="ResetKeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime"></a>

```csharp
private void ResetKeyLifetime()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SpiffeSecretBackendConfig.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SpiffeSecretBackendConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SpiffeSecretBackendConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

SpiffeSecretBackendConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpiffeSecretBackendConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpiffeSecretBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput">BundleRefreshHintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput">JwtIssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput">JwtOidcCompatibilityModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput">JwtSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput">KeyLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput">TrustDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint">BundleRefreshHint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl">JwtIssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode">JwtOidcCompatibilityMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm">JwtSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime">KeyLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain">TrustDomain</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BundleRefreshHintInput`<sup>Optional</sup> <a name="BundleRefreshHintInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput"></a>

```csharp
public string BundleRefreshHintInput { get; }
```

- *Type:* string

---

##### `JwtIssuerUrlInput`<sup>Optional</sup> <a name="JwtIssuerUrlInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput"></a>

```csharp
public string JwtIssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwtOidcCompatibilityModeInput`<sup>Optional</sup> <a name="JwtOidcCompatibilityModeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput"></a>

```csharp
public bool|IResolvable JwtOidcCompatibilityModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JwtSigningAlgorithmInput`<sup>Optional</sup> <a name="JwtSigningAlgorithmInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput"></a>

```csharp
public string JwtSigningAlgorithmInput { get; }
```

- *Type:* string

---

##### `KeyLifetimeInput`<sup>Optional</sup> <a name="KeyLifetimeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput"></a>

```csharp
public string KeyLifetimeInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput"></a>

```csharp
public string TrustDomainInput { get; }
```

- *Type:* string

---

##### `BundleRefreshHint`<sup>Required</sup> <a name="BundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint"></a>

```csharp
public string BundleRefreshHint { get; }
```

- *Type:* string

---

##### `JwtIssuerUrl`<sup>Required</sup> <a name="JwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl"></a>

```csharp
public string JwtIssuerUrl { get; }
```

- *Type:* string

---

##### `JwtOidcCompatibilityMode`<sup>Required</sup> <a name="JwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode"></a>

```csharp
public bool|IResolvable JwtOidcCompatibilityMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JwtSigningAlgorithm`<sup>Required</sup> <a name="JwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm"></a>

```csharp
public string JwtSigningAlgorithm { get; }
```

- *Type:* string

---

##### `KeyLifetime`<sup>Required</sup> <a name="KeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime"></a>

```csharp
public string KeyLifetime { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain"></a>

```csharp
public string TrustDomain { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeSecretBackendConfigConfig <a name="SpiffeSecretBackendConfigConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new SpiffeSecretBackendConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string TrustDomain,
    string BundleRefreshHint = null,
    string JwtIssuerUrl = null,
    bool|IResolvable JwtOidcCompatibilityMode = null,
    string JwtSigningAlgorithm = null,
    string KeyLifetime = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain">TrustDomain</a></code> | <code>string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint">BundleRefreshHint</a></code> | <code>string</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl">JwtIssuerUrl</a></code> | <code>string</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode">JwtOidcCompatibilityMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm">JwtSigningAlgorithm</a></code> | <code>string</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime">KeyLifetime</a></code> | <code>string</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain"></a>

```csharp
public string TrustDomain { get; set; }
```

- *Type:* string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `BundleRefreshHint`<sup>Optional</sup> <a name="BundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint"></a>

```csharp
public string BundleRefreshHint { get; set; }
```

- *Type:* string

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `JwtIssuerUrl`<sup>Optional</sup> <a name="JwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl"></a>

```csharp
public string JwtIssuerUrl { get; set; }
```

- *Type:* string

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `JwtOidcCompatibilityMode`<sup>Optional</sup> <a name="JwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode"></a>

```csharp
public bool|IResolvable JwtOidcCompatibilityMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `JwtSigningAlgorithm`<sup>Optional</sup> <a name="JwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm"></a>

```csharp
public string JwtSigningAlgorithm { get; set; }
```

- *Type:* string

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `KeyLifetime`<sup>Optional</sup> <a name="KeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime"></a>

```csharp
public string KeyLifetime { get; set; }
```

- *Type:* string

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---



