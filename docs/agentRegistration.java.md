# `agentRegistration` Submodule <a name="`agentRegistration` Submodule" id="@cdktn/provider-vault.agentRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentRegistration <a name="AgentRegistration" id="@cdktn/provider-vault.agentRegistration.AgentRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistration;

AgentRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .entityId(java.lang.String)
//  .ceilingPolicies(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultCeilingPolicy(java.lang.Boolean|IResolvable)
//  .optionalAuthorizationDetails(java.lang.Boolean|IResolvable)
//  .owner(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.entityId">entityId</a></code> | <code>java.lang.String</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.ceilingPolicies">ceilingPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.noDefaultCeilingPolicy">noDefaultCeilingPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the agent registration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.entityId"></a>

- *Type:* java.lang.String

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `ceilingPolicies`<sup>Optional</sup> <a name="ceilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.ceilingPolicies"></a>

- *Type:* java.util.List<java.lang.String>

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `noDefaultCeilingPolicy`<sup>Optional</sup> <a name="noDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.noDefaultCeilingPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.optionalAuthorizationDetails"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.Initializer.parameter.owner"></a>

- *Type:* java.lang.String

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies">resetCeilingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy">resetNoDefaultCeilingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails">resetOptionalAuthorizationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCeilingPolicies` <a name="resetCeilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetCeilingPolicies"></a>

```java
public void resetCeilingPolicies()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNoDefaultCeilingPolicy` <a name="resetNoDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetNoDefaultCeilingPolicy"></a>

```java
public void resetNoDefaultCeilingPolicy()
```

##### `resetOptionalAuthorizationDetails` <a name="resetOptionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOptionalAuthorizationDetails"></a>

```java
public void resetOptionalAuthorizationDetails()
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.resetOwner"></a>

```java
public void resetOwner()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistration;

AgentRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistration;

AgentRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistration;

AgentRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistration;

AgentRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AgentRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AgentRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AgentRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AgentRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput">ceilingPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput">noDefaultCeilingPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput">optionalAuthorizationDetailsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput">ownerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies">ceilingPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy">noDefaultCeilingPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `ceilingPoliciesInput`<sup>Optional</sup> <a name="ceilingPoliciesInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getCeilingPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `noDefaultCeilingPolicyInput`<sup>Optional</sup> <a name="noDefaultCeilingPolicyInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultCeilingPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optionalAuthorizationDetailsInput`<sup>Optional</sup> <a name="optionalAuthorizationDetailsInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetailsInput"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetailsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ownerInput"></a>

```java
public java.lang.String getOwnerInput();
```

- *Type:* java.lang.String

---

##### `ceilingPolicies`<sup>Required</sup> <a name="ceilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.ceilingPolicies"></a>

```java
public java.util.List<java.lang.String> getCeilingPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `noDefaultCeilingPolicy`<sup>Required</sup> <a name="noDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.noDefaultCeilingPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultCeilingPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `optionalAuthorizationDetails`<sup>Required</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.optionalAuthorizationDetails"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.agentRegistration.AgentRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AgentRegistrationConfig <a name="AgentRegistrationConfig" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.agent_registration.AgentRegistrationConfig;

AgentRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .entityId(java.lang.String)
//  .ceilingPolicies(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultCeilingPolicy(java.lang.Boolean|IResolvable)
//  .optionalAuthorizationDetails(java.lang.Boolean|IResolvable)
//  .owner(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId">entityId</a></code> | <code>java.lang.String</code> | Entity ID representing this agent. Each entity can only have one registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies">ceilingPolicies</a></code> | <code>java.util.List<java.lang.String></code> | List of policy identifiers that define the authorization ceiling for this agent. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Detailed description of the agent's purpose. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy">noDefaultCeilingPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, opts out of automatically adding the default-ceiling policy to this agent registration. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails">optionalAuthorizationDetails</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. |
| <code><a href="#@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner">owner</a></code> | <code>java.lang.String</code> | Owner of the agent registration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

Entity ID representing this agent. Each entity can only have one registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}

---

##### `ceilingPolicies`<sup>Optional</sup> <a name="ceilingPolicies" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.ceilingPolicies"></a>

```java
public java.util.List<java.lang.String> getCeilingPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of policy identifiers that define the authorization ceiling for this agent.

Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Detailed description of the agent's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}

---

##### `noDefaultCeilingPolicy`<sup>Optional</sup> <a name="noDefaultCeilingPolicy" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.noDefaultCeilingPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultCeilingPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, opts out of automatically adding the default-ceiling policy to this agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}

---

##### `optionalAuthorizationDetails`<sup>Optional</sup> <a name="optionalAuthorizationDetails" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.optionalAuthorizationDetails"></a>

```java
public java.lang.Boolean|IResolvable getOptionalAuthorizationDetails();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token.

When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-vault.agentRegistration.AgentRegistrationConfig.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

Owner of the agent registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}

---



