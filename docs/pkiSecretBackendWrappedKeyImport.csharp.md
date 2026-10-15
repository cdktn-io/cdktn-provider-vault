# `pkiSecretBackendWrappedKeyImport` Submodule <a name="`pkiSecretBackendWrappedKeyImport` Submodule" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendWrappedKeyImport <a name="PkiSecretBackendWrappedKeyImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiSecretBackendWrappedKeyImport(Construct Scope, string Id, PkiSecretBackendWrappedKeyImportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig">PkiSecretBackendWrappedKeyImportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiSecretBackendWrappedKeyImport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiSecretBackendWrappedKeyImport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiSecretBackendWrappedKeyImport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

PkiSecretBackendWrappedKeyImport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendWrappedKeyImport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput">ExportKeyHmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput">WrappedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey">WrappedKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `ExportKeyHmacInput`<sup>Optional</sup> <a name="ExportKeyHmacInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmacInput"></a>

```csharp
public string ExportKeyHmacInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `WrappedKeyInput`<sup>Optional</sup> <a name="WrappedKeyInput" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKeyInput"></a>

```csharp
public string WrappedKeyInput { get; }
```

- *Type:* string

---

##### ~~`ExportKeyHmac`~~<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.exportKeyHmac"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string ExportKeyHmac { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### ~~`WrappedKey`~~<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.wrappedKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```csharp
public string WrappedKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendWrappedKeyImportConfig <a name="PkiSecretBackendWrappedKeyImportConfig" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new PkiSecretBackendWrappedKeyImportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ExportKeyHmac,
    string Mount,
    string WrappedKey,
    string KeyName = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac">ExportKeyHmac</a></code> | <code>string</code> | HMAC fingerprint of the wrapping key used to encrypt the blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the destination PKI secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey">WrappedKey</a></code> | <code>string</code> | Base64-encoded wrapped CA private key blob. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName">KeyName</a></code> | <code>string</code> | Human-readable name for the imported key in Vault. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExportKeyHmac`<sup>Required</sup> <a name="ExportKeyHmac" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.exportKeyHmac"></a>

```csharp
public string ExportKeyHmac { get; set; }
```

- *Type:* string

HMAC fingerprint of the wrapping key used to encrypt the blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the destination PKI secrets engine mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}

---

##### `WrappedKey`<sup>Required</sup> <a name="WrappedKey" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.wrappedKey"></a>

```csharp
public string WrappedKey { get; set; }
```

- *Type:* string

Base64-encoded wrapped CA private key blob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Human-readable name for the imported key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.pkiSecretBackendWrappedKeyImport.PkiSecretBackendWrappedKeyImportConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}

---



