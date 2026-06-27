# `kmipSecretCaImported` Submodule <a name="`kmipSecretCaImported` Submodule" id="@cdktn/provider-vault.kmipSecretCaImported"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretCaImported <a name="KmipSecretCaImported" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported vault_kmip_secret_ca_imported}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretCaImported(Construct Scope, string Id, KmipSecretCaImportedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig">KmipSecretCaImportedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig">KmipSecretCaImportedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField">ResetRoleField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField">ResetScopeField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName">ResetScopeName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRoleField` <a name="ResetRoleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleField"></a>

```csharp
private void ResetRoleField()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetScopeField` <a name="ResetScopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeField"></a>

```csharp
private void ResetScopeField()
```

##### `ResetScopeName` <a name="ResetScopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.resetScopeName"></a>

```csharp
private void ResetScopeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretCaImported.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretCaImported.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretCaImported.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KmipSecretCaImported.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KmipSecretCaImported resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KmipSecretCaImported to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KmipSecretCaImported that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretCaImported to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput">CaPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput">RoleFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput">ScopeFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput">ScopeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem">CaPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField">RoleField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField">ScopeField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName">ScopeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaPemInput`<sup>Optional</sup> <a name="CaPemInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPemInput"></a>

```csharp
public string CaPemInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RoleFieldInput`<sup>Optional</sup> <a name="RoleFieldInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleFieldInput"></a>

```csharp
public string RoleFieldInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `ScopeFieldInput`<sup>Optional</sup> <a name="ScopeFieldInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeFieldInput"></a>

```csharp
public string ScopeFieldInput { get; }
```

- *Type:* string

---

##### `ScopeNameInput`<sup>Optional</sup> <a name="ScopeNameInput" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeNameInput"></a>

```csharp
public string ScopeNameInput { get; }
```

- *Type:* string

---

##### `CaPem`<sup>Required</sup> <a name="CaPem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.caPem"></a>

```csharp
public string CaPem { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RoleField`<sup>Required</sup> <a name="RoleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleField"></a>

```csharp
public string RoleField { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `ScopeField`<sup>Required</sup> <a name="ScopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeField"></a>

```csharp
public string ScopeField { get; }
```

- *Type:* string

---

##### `ScopeName`<sup>Required</sup> <a name="ScopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.scopeName"></a>

```csharp
public string ScopeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImported.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretCaImportedConfig <a name="KmipSecretCaImportedConfig" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KmipSecretCaImportedConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CaPem,
    string Name,
    string Path,
    string Namespace = null,
    string RoleField = null,
    string RoleName = null,
    string ScopeField = null,
    string ScopeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem">CaPem</a></code> | <code>string</code> | CA certificate in PEM format. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name">Name</a></code> | <code>string</code> | Name to identify the CA. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path">Path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField">RoleField</a></code> | <code>string</code> | The field in the certificate to use for the role (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName">RoleName</a></code> | <code>string</code> | The role name to associate with this CA. Must specify exactly one of role_name or role_field. |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField">ScopeField</a></code> | <code>string</code> | The field in the certificate to use for the scope (CN, O, OU, or UID). |
| <code><a href="#@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName">ScopeName</a></code> | <code>string</code> | The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaPem`<sup>Required</sup> <a name="CaPem" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.caPem"></a>

```csharp
public string CaPem { get; set; }
```

- *Type:* string

CA certificate in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#ca_pem KmipSecretCaImported#ca_pem}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name to identify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#name KmipSecretCaImported#name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#path KmipSecretCaImported#path}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#namespace KmipSecretCaImported#namespace}

---

##### `RoleField`<sup>Optional</sup> <a name="RoleField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleField"></a>

```csharp
public string RoleField { get; set; }
```

- *Type:* string

The field in the certificate to use for the role (CN, O, OU, or UID).

Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#role_field KmipSecretCaImported#role_field}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The role name to associate with this CA. Must specify exactly one of role_name or role_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#role_name KmipSecretCaImported#role_name}

---

##### `ScopeField`<sup>Optional</sup> <a name="ScopeField" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeField"></a>

```csharp
public string ScopeField { get; set; }
```

- *Type:* string

The field in the certificate to use for the scope (CN, O, OU, or UID).

Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#scope_field KmipSecretCaImported#scope_field}

---

##### `ScopeName`<sup>Optional</sup> <a name="ScopeName" id="@cdktn/provider-vault.kmipSecretCaImported.KmipSecretCaImportedConfig.property.scopeName"></a>

```csharp
public string ScopeName { get; set; }
```

- *Type:* string

The scope name to associate with this CA. Must specify exactly one of scope_name or scope_field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/kmip_secret_ca_imported#scope_name KmipSecretCaImported#scope_name}

---



