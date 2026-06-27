# `keymgmtReplicateKey` Submodule <a name="`keymgmtReplicateKey` Submodule" id="@cdktn/provider-vault.keymgmtReplicateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymgmtReplicateKey <a name="KeymgmtReplicateKey" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key vault_keymgmt_replicate_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtReplicateKey(Construct Scope, string Id, KeymgmtReplicateKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig">KeymgmtReplicateKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig">KeymgmtReplicateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a KeymgmtReplicateKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtReplicateKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtReplicateKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtReplicateKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

KeymgmtReplicateKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a KeymgmtReplicateKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeymgmtReplicateKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeymgmtReplicateKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the KeymgmtReplicateKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.kmsNameInput">KmsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.kmsName">KmsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `KmsNameInput`<sup>Optional</sup> <a name="KmsNameInput" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.kmsNameInput"></a>

```csharp
public string KmsNameInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `KmsName`<sup>Required</sup> <a name="KmsName" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.kmsName"></a>

```csharp
public string KmsName { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeymgmtReplicateKeyConfig <a name="KeymgmtReplicateKeyConfig" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new KeymgmtReplicateKeyConfig {
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
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | Specifies the name of the key to replicate. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.kmsName">KmsName</a></code> | <code>string</code> | Specifies the name of the AWS KMS provider. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the Key Management secrets engine mount. |
| <code><a href="#@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Specifies the name of the key to replicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key#key_name KeymgmtReplicateKey#key_name}

---

##### `KmsName`<sup>Required</sup> <a name="KmsName" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.kmsName"></a>

```csharp
public string KmsName { get; set; }
```

- *Type:* string

Specifies the name of the AWS KMS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key#kms_name KeymgmtReplicateKey#kms_name}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the Key Management secrets engine mount.

Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key#mount KeymgmtReplicateKey#mount}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.keymgmtReplicateKey.KeymgmtReplicateKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_replicate_key#namespace KeymgmtReplicateKey#namespace}

---



