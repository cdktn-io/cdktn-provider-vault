# `gcpkmsSecretBackendKey` Submodule <a name="`gcpkmsSecretBackendKey` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackendKey <a name="GcpkmsSecretBackendKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpkmsSecretBackendKey(Construct Scope, string Id, GcpkmsSecretBackendKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig">GcpkmsSecretBackendKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey">ResetCryptoKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel">ResetProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose">ResetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod">ResetRotationPeriod</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetCryptoKey` <a name="ResetCryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey"></a>

```csharp
private void ResetCryptoKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProtectionLevel` <a name="ResetProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel"></a>

```csharp
private void ResetProtectionLevel()
```

##### `ResetPurpose` <a name="ResetPurpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose"></a>

```csharp
private void ResetPurpose()
```

##### `ResetRotationPeriod` <a name="ResetRotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod"></a>

```csharp
private void ResetRotationPeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackendKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackendKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackendKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

GcpkmsSecretBackendKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GcpkmsSecretBackendKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GcpkmsSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds">NextRotationTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion">PrimaryVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds">RotationScheduleSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput">KeyRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput">ProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput">RotationPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing">KeyRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NextRotationTimeSeconds`<sup>Required</sup> <a name="NextRotationTimeSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds"></a>

```csharp
public double NextRotationTimeSeconds { get; }
```

- *Type:* double

---

##### `PrimaryVersion`<sup>Required</sup> <a name="PrimaryVersion" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion"></a>

```csharp
public double PrimaryVersion { get; }
```

- *Type:* double

---

##### `RotationScheduleSeconds`<sup>Required</sup> <a name="RotationScheduleSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds"></a>

```csharp
public double RotationScheduleSeconds { get; }
```

- *Type:* double

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput"></a>

```csharp
public string CryptoKeyInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KeyRingInput`<sup>Optional</sup> <a name="KeyRingInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput"></a>

```csharp
public string KeyRingInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProtectionLevelInput`<sup>Optional</sup> <a name="ProtectionLevelInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput"></a>

```csharp
public string ProtectionLevelInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `RotationPeriodInput`<sup>Optional</sup> <a name="RotationPeriodInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput"></a>

```csharp
public string RotationPeriodInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing"></a>

```csharp
public string KeyRing { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendKeyConfig <a name="GcpkmsSecretBackendKeyConfig" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new GcpkmsSecretBackendKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KeyName,
    string KeyRing,
    string Mount,
    string Algorithm = null,
    string CryptoKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Namespace = null,
    string ProtectionLevel = null,
    string Purpose = null,
    string RotationPeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing">KeyRing</a></code> | <code>string</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose">Purpose</a></code> | <code>string</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `KeyRing`<sup>Required</sup> <a name="KeyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing"></a>

```csharp
public string KeyRing { get; set; }
```

- *Type:* string

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `CryptoKey`<sup>Optional</sup> <a name="CryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; set; }
```

- *Type:* string

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `ProtectionLevel`<sup>Optional</sup> <a name="ProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; set; }
```

- *Type:* string

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `Purpose`<sup>Optional</sup> <a name="Purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `RotationPeriod`<sup>Optional</sup> <a name="RotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; set; }
```

- *Type:* string

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---



