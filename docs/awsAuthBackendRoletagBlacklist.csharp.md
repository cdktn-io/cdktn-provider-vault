# `awsAuthBackendRoletagBlacklist` Submodule <a name="`awsAuthBackendRoletagBlacklist` Submodule" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoletagBlacklist <a name="AwsAuthBackendRoletagBlacklist" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist vault_aws_auth_backend_roletag_blacklist}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendRoletagBlacklist(Construct Scope, string Id, AwsAuthBackendRoletagBlacklistConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy">ResetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer">ResetSafetyBuffer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisablePeriodicTidy` <a name="ResetDisablePeriodicTidy" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy"></a>

```csharp
private void ResetDisablePeriodicTidy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetSafetyBuffer` <a name="ResetSafetyBuffer" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer"></a>

```csharp
private void ResetSafetyBuffer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AwsAuthBackendRoletagBlacklist resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRoletagBlacklist.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRoletagBlacklist.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRoletagBlacklist.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Vault;

AwsAuthBackendRoletagBlacklist.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AwsAuthBackendRoletagBlacklist resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendRoletagBlacklist to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendRoletagBlacklist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRoletagBlacklist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput">DisablePeriodicTidyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput">SafetyBufferInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer">SafetyBuffer</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `DisablePeriodicTidyInput`<sup>Optional</sup> <a name="DisablePeriodicTidyInput" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput"></a>

```csharp
public bool|IResolvable DisablePeriodicTidyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `SafetyBufferInput`<sup>Optional</sup> <a name="SafetyBufferInput" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput"></a>

```csharp
public double SafetyBufferInput { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `DisablePeriodicTidy`<sup>Required</sup> <a name="DisablePeriodicTidy" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy"></a>

```csharp
public bool|IResolvable DisablePeriodicTidy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `SafetyBuffer`<sup>Required</sup> <a name="SafetyBuffer" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer"></a>

```csharp
public double SafetyBuffer { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoletagBlacklistConfig <a name="AwsAuthBackendRoletagBlacklistConfig" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new AwsAuthBackendRoletagBlacklistConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Backend,
    bool|IResolvable DisablePeriodicTidy = null,
    string Id = null,
    string Namespace = null,
    double SafetyBuffer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy">DisablePeriodicTidy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, disables the periodic tidying of the roletag blacklist entries. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer">SafetyBuffer</a></code> | <code>double</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#backend AwsAuthBackendRoletagBlacklist#backend}

---

##### `DisablePeriodicTidy`<sup>Optional</sup> <a name="DisablePeriodicTidy" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy"></a>

```csharp
public bool|IResolvable DisablePeriodicTidy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, disables the periodic tidying of the roletag blacklist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#disable_periodic_tidy AwsAuthBackendRoletagBlacklist#disable_periodic_tidy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#namespace AwsAuthBackendRoletagBlacklist#namespace}

---

##### `SafetyBuffer`<sup>Optional</sup> <a name="SafetyBuffer" id="@cdktn/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer"></a>

```csharp
public double SafetyBuffer { get; set; }
```

- *Type:* double

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/aws_auth_backend_roletag_blacklist#safety_buffer AwsAuthBackendRoletagBlacklist#safety_buffer}

---



