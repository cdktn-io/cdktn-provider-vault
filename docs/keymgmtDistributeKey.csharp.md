# `keymgmtDistributeKey` Submodule <a name="`keymgmtDistributeKey` Submodule" id="@cdktn/provider-vault.keymgmtDistributeKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtDistributeKey <a name="KeymgmtDistributeKey" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key vault_keymgmt_distribute_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtDistributeKey(Construct Scope, string Id, KeymgmtDistributeKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig">KeymgmtDistributeKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig">KeymgmtDistributeKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection">ResetProtection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProtection` <a name="ResetProtection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.resetProtection"></a>

```csharp
private void ResetProtection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtDistributeKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtDistributeKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtDistributeKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtDistributeKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KeymgmtDistributeKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymgmtDistributeKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymgmtDistributeKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtDistributeKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions">Versions</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput">KmsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput">ProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput">PurposeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName">KmsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection">Protection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose">Purpose</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.versions"></a>

```csharp
public StringMap Versions { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KmsNameInput`<sup>Optional</sup> <a name="KmsNameInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsNameInput"></a>

```csharp
public string KmsNameInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProtectionInput`<sup>Optional</sup> <a name="ProtectionInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protectionInput"></a>

```csharp
public string ProtectionInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purposeInput"></a>

```csharp
public string[] PurposeInput { get; }
```

- *Type:* string[]

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsName`<sup>Required</sup> <a name="KmsName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.kmsName"></a>

```csharp
public string KmsName { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Protection`<sup>Required</sup> <a name="Protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.protection"></a>

```csharp
public string Protection { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.purpose"></a>

```csharp
public string[] Purpose { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtDistributeKeyConfig <a name="KeymgmtDistributeKeyConfig" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtDistributeKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KeyName,
    string KmsName,
    string Mount,
    string[] Purpose,
    string Namespace = null,
    string Protection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | Specifies the name of the key to distribute to the given KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName">KmsName</a></code> | <code>string</code> | Specifies the name of the KMS provider to distribute the given key to. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose">Purpose</a></code> | <code>string[]</code> | Specifies the purpose of the key. |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection">Protection</a></code> | <code>string</code> | Specifies the protection of the key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Specifies the name of the key to distribute to the given KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#key_name KeymgmtDistributeKey#key_name}

---

##### `KmsName`<sup>Required</sup> <a name="KmsName" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.kmsName"></a>

```csharp
public string KmsName { get; set; }
```

- *Type:* string

Specifies the name of the KMS provider to distribute the given key to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#kms_name KeymgmtDistributeKey#kms_name}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#mount KeymgmtDistributeKey#mount}

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.purpose"></a>

```csharp
public string[] Purpose { get; set; }
```

- *Type:* string[]

Specifies the purpose of the key.

The purpose defines a set of cryptographic capabilities that the key will have in the KMS provider. A key must have at least one of the supported purposes. The following values are supported : encrypt, decrypt, sign, verify, wrap, unwrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#purpose KeymgmtDistributeKey#purpose}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#namespace KeymgmtDistributeKey#namespace}

---

##### `Protection`<sup>Optional</sup> <a name="Protection" id="@cdktn/provider-vault.keymgmtDistributeKey.KeymgmtDistributeKeyConfig.property.protection"></a>

```csharp
public string Protection { get; set; }
```

- *Type:* string

Specifies the protection of the key.

The protection defines where cryptographic operations are performed with the key in the KMS provider. The following values are supported: hsm, software. Defaults to `hsm`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_distribute_key#protection KeymgmtDistributeKey#protection}

---



