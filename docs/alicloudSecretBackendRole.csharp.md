# `alicloudSecretBackendRole` Submodule <a name="`alicloudSecretBackendRole` Submodule" id="@cdktn/provider-vault.alicloudSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackendRole <a name="AlicloudSecretBackendRole" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRole(Construct Scope, string Id, AlicloudSecretBackendRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies">PutInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies">PutRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies">ResetInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl">ResetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies">ResetRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInlinePolicies` <a name="PutInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies"></a>

```csharp
private void PutInlinePolicies(IResolvable|AlicloudSecretBackendRoleInlinePolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---

##### `PutRemotePolicies` <a name="PutRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies"></a>

```csharp
private void PutRemotePolicies(IResolvable|AlicloudSecretBackendRoleRemotePolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---

##### `ResetInlinePolicies` <a name="ResetInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies"></a>

```csharp
private void ResetInlinePolicies()
```

##### `ResetMaxTtl` <a name="ResetMaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl"></a>

```csharp
private void ResetMaxTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRemotePolicies` <a name="ResetRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies"></a>

```csharp
private void ResetRemotePolicies()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AlicloudSecretBackendRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AlicloudSecretBackendRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AlicloudSecretBackendRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AlicloudSecretBackendRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlicloudSecretBackendRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlicloudSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies">InlinePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies">RemotePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput">InlinePoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput">MaxTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput">RemotePoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl">MaxTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InlinePolicies`<sup>Required</sup> <a name="InlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies"></a>

```csharp
public AlicloudSecretBackendRoleInlinePoliciesList InlinePolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a>

---

##### `RemotePolicies`<sup>Required</sup> <a name="RemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies"></a>

```csharp
public AlicloudSecretBackendRoleRemotePoliciesList RemotePolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a>

---

##### `InlinePoliciesInput`<sup>Optional</sup> <a name="InlinePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleInlinePolicies[] InlinePoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---

##### `MaxTtlInput`<sup>Optional</sup> <a name="MaxTtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput"></a>

```csharp
public double MaxTtlInput { get; }
```

- *Type:* double

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RemotePoliciesInput`<sup>Optional</sup> <a name="RemotePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleRemotePolicies[] RemotePoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `MaxTtl`<sup>Required</sup> <a name="MaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl"></a>

```csharp
public double MaxTtl { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendRoleConfig <a name="AlicloudSecretBackendRoleConfig" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Mount,
    string Name,
    IResolvable|AlicloudSecretBackendRoleInlinePolicies[] InlinePolicies = null,
    double MaxTtl = null,
    string Namespace = null,
    IResolvable|AlicloudSecretBackendRoleRemotePolicies[] RemotePolicies = null,
    string RoleArn = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount">Mount</a></code> | <code>string</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name">Name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies">InlinePolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl">MaxTtl</a></code> | <code>double</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies">RemotePolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl">Ttl</a></code> | <code>double</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `InlinePolicies`<sup>Optional</sup> <a name="InlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleInlinePolicies[] InlinePolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `MaxTtl`<sup>Optional</sup> <a name="MaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl"></a>

```csharp
public double MaxTtl { get; set; }
```

- *Type:* double

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `RemotePolicies`<sup>Optional</sup> <a name="RemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleRemotePolicies[] RemotePolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

### AlicloudSecretBackendRoleInlinePolicies <a name="AlicloudSecretBackendRoleInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleInlinePolicies {
    string PolicyDocument
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | JSON-encoded inline policy document. |

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

JSON-encoded inline policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}

---

### AlicloudSecretBackendRoleRemotePolicies <a name="AlicloudSecretBackendRoleRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleRemotePolicies {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name">Name</a></code> | <code>string</code> | Name of the remote policy. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type">Type</a></code> | <code>string</code> | Type of the remote policy (System or Custom). |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the remote policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the remote policy (System or Custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AlicloudSecretBackendRoleInlinePoliciesList <a name="AlicloudSecretBackendRoleInlinePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleInlinePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get"></a>

```csharp
private AlicloudSecretBackendRoleInlinePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleInlinePolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---


### AlicloudSecretBackendRoleInlinePoliciesOutputReference <a name="AlicloudSecretBackendRoleInlinePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleInlinePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleInlinePolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>

---


### AlicloudSecretBackendRoleRemotePoliciesList <a name="AlicloudSecretBackendRoleRemotePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleRemotePoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get"></a>

```csharp
private AlicloudSecretBackendRoleRemotePoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleRemotePolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---


### AlicloudSecretBackendRoleRemotePoliciesOutputReference <a name="AlicloudSecretBackendRoleRemotePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AlicloudSecretBackendRoleRemotePoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AlicloudSecretBackendRoleRemotePolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>

---



