# `keymgmtGcpKms` Submodule <a name="`keymgmtGcpKms` Submodule" id="@cdktn/provider-vault.keymgmtGcpKms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtGcpKms <a name="KeymgmtGcpKms" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms vault_keymgmt_gcp_kms}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtGcpKms(Construct Scope, string Id, KeymgmtGcpKmsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig">KeymgmtGcpKmsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig">KeymgmtGcpKmsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWo">ResetCredentialsWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWoVersion">ResetCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialsWo` <a name="ResetCredentialsWo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWo"></a>

```csharp
private void ResetCredentialsWo()
```

##### `ResetCredentialsWoVersion` <a name="ResetCredentialsWoVersion" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetCredentialsWoVersion"></a>

```csharp
private void ResetCredentialsWoVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtGcpKms resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtGcpKms.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtGcpKms.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtGcpKms.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtGcpKms.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KeymgmtGcpKms resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymgmtGcpKms to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymgmtGcpKms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtGcpKms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoInput">CredentialsWoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersionInput">CredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollectionInput">KeyCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWo">CredentialsWo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollection">KeyCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CredentialsWoInput`<sup>Optional</sup> <a name="CredentialsWoInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialsWoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialsWoVersionInput`<sup>Optional</sup> <a name="CredentialsWoVersionInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersionInput"></a>

```csharp
public double CredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `KeyCollectionInput`<sup>Optional</sup> <a name="KeyCollectionInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollectionInput"></a>

```csharp
public string KeyCollectionInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `CredentialsWo`<sup>Required</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialsWo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CredentialsWoVersion`<sup>Required</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; }
```

- *Type:* double

---

##### `KeyCollection`<sup>Required</sup> <a name="KeyCollection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.keyCollection"></a>

```csharp
public string KeyCollection { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKms.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtGcpKmsConfig <a name="KeymgmtGcpKmsConfig" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtGcpKmsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KeyCollection,
    string Mount,
    string Name,
    System.Collections.Generic.IDictionary<string, string> CredentialsWo = null,
    double CredentialsWoVersion = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.keyCollection">KeyCollection</a></code> | <code>string</code> | Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWo">CredentialsWo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The credentials to use for authentication with Google Cloud KMS. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWoVersion">CredentialsWoVersion</a></code> | <code>double</code> | Version counter for the write-only `credentials_wo` field. |
| <code><a href="#@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyCollection`<sup>Required</sup> <a name="KeyCollection" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.keyCollection"></a>

```csharp
public string KeyCollection { get; set; }
```

- *Type:* string

Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#key_collection KeymgmtGcpKms#key_collection}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#mount KeymgmtGcpKms#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#name KeymgmtGcpKms#name}

---

##### `CredentialsWo`<sup>Optional</sup> <a name="CredentialsWo" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CredentialsWo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The credentials to use for authentication with Google Cloud KMS.

Supplying values for this parameter is optional, as credentials may also be specified through environment variables or Application Default Credentials. The order of precedence is environment variables, then the credentials provided to this parameter and Application Default Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#credentials_wo KeymgmtGcpKms#credentials_wo}

---

##### `CredentialsWoVersion`<sup>Optional</sup> <a name="CredentialsWoVersion" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.credentialsWoVersion"></a>

```csharp
public double CredentialsWoVersion { get; set; }
```

- *Type:* double

Version counter for the write-only `credentials_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#credentials_wo_version KeymgmtGcpKms#credentials_wo_version}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtGcpKms.KeymgmtGcpKmsConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_gcp_kms#namespace KeymgmtGcpKms#namespace}

---



